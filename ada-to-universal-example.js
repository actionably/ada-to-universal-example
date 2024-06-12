import { fetchAdaMessages } from "./fetch-ada-data.js";

const DASHBOT_API_KEY = 'API_KEY_HERE'
const TRACKER_URL_PREFIX = 'https://tracker.dashbot.io/track?platform=universal&v=10.1.1-rest'

/**
 * Main method for this example program.
 *
 * -- Fetches Ada messages
 * -- Converts to Dashbot's Universal format
 * -- Sends to Dashbot via their message tracker endpoint for data ingestion
 */
const handleAdaToUniveralConversion = async () => {
  // Fetch messages from Ada
  const adaMessages = fetchAdaMessages()
  const messageDataArray = adaMessages.data

  // Convert to the Dashbot Univeral format
  const universalData = messageDataArray.map((adaMessage) => {
    switch (adaMessage.message_data._type) {
      case 'text':
        return {
          incoming: adaMessage.sender === 'ada' || adaMessage.sender === 'bot',
          dashbot_timestamp: new Date(adaMessage.date_created).getTime(),
          text: adaMessage.message_data.body,
          conversationId: adaMessage.conversation_id,
          userId: adaMessage.chatter_id,
          platformJson: { ...adaMessage } // PlatformJson is a space for any additional data you want to send to Dashbot
        }
        break;
      default: // Note that events, pictures, and other attachments and types are supported.  Please see the Dashbot API documentation for more information.
        console.trace("Unsupported message type: " + adaMessage.message_data._type)
        break;
    }
  }).filter((message) => message !== undefined)

  // The conversion is done.  This is simply illustrative of how to get this over to the Dashbot system.
  await sendToDashbot(universalData)
}

/**
 * Sends data to Dashbot via the message tracker endpoint.  Note that at this point, you could also write this array to
 * a file in JSONL format and upload via the file upload functionality.
 *
 * @param universalData Data translated to the universal format
 */
const sendToDashbot = async (universalData) => {
  for (const message of universalData) {
    const data = JSON.stringify(message)
    const url =`${TRACKER_URL_PREFIX}&apiKey=${DASHBOT_API_KEY}&type=${message.incoming ? 'incoming' : 'outgoing'}`

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: data
    })

    if (res.status === 200) {
      console.trace("Yay!  We sent a message to Dashbot!")
    } else {
      console.error("Oh no!  Something went wrong.  Check the configs and possible contact support.")
    }
  }
}

await handleAdaToUniveralConversion()