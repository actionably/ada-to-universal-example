const ADA_API_URL_PREFIX = 'ADA_URL_HERE'
const ADA_API_ACCESS_TOKEN = 'ADA_ACCESS_TOKEN_HERE'

/**
 * Fetches messages from the Ada API using the provided access token and URL prefix.  This function will only work with
 * an actual ADA token and url so you will need to sign up for an Ada account to get this to work.
 *
 * @returns {Promise} A promise that resolves with the data from the Ada API or rejects with an error message.
 */
const fetchAdaMessagesFromAdaAPI = async () => {
  const createdSinceTimestamp = new Date(2024, 1, 0) // January 1st, 2024
  const response = await fetch(`${ADA_API_URL_PREFIX}messages?created_since=${createdSinceTimestamp.toISOString()}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${ADA_API_ACCESS_TOKEN}`,
    }
  })

  const res = await response.json()
  if (res.message === 'OK') { // Yay, we got a response!
    return res.data
  } else { // Something went wrong!
    throw new Error("Failed to fetch messages from Ada API!")
  }
}

/**
 * Normally, this would be a fetch request to the Ada API, a database, or some kind of triggered event.  In this case,
 *   we are simply going to return an array of some messages in the ADA format for illustrative purposes.
 *
 * This data is pulled verbatim from the Ada documentation, found here: https://developers.ada.cx/reference/data-export-message-object
 */
const fetchStaticAdaMessages = () => {
  return {
    "data": [
      {
        "_id": "623225807973ea81fb74577f",
        "answer_id": "6216a263c0c9f28ed7a16c1d",
        "answer_title": "Ada Interact > Welcome Message",
        "chatter_id": "6232257fb197d1ff65ea92fe",
        "conversation_id": "62322580b151ff975f1eb495",
        "date_created": "2022-03-16T17:59:28.356000+00:00",
        "link_was_clicked": false,
        "message_data": {
          "_type": "picture",
          "alt_text": "",
          "has_variables": false,
          "pic_url": "https://static.ada.support/images/a76040d4-f431-4956-8984-b7fc3c6a635b.svg",
          "reviewable_message": false
        },
        "recipient": "6232257fb197d1ff65ea92fe",
        "review": 0,
        "sender": "ada"
      },
      {
        "_id": "623225807973ea81fb745780",
        "answer_id": "6216a263c0c9f28ed7a16c1d",
        "answer_title": "Ada Interact > Welcome Message",
        "chatter_id": "6232257fb197d1ff65ea92fe",
        "conversation_id": "62322580b151ff975f1eb495",
        "date_created": "2022-03-16T17:59:28.393000+00:00",
        "link_was_clicked": false,
        "message_data": {
          "_type": "text",
          "body": "👋 Welcome to Ada Interact! ",
          "has_variables": false,
          "reviewable_message": false
        },
        "recipient": "6232257fb197d1ff65ea92fe",
        "review": 0,
        "sender": "ada"
      },
      {
        "_id": "623225807973ea81fb745781",
        "answer_id": "6216a263c0c9f28ed7a16c1d",
        "answer_title": "Ada Interact > Welcome Message",
        "chatter_id": "6232257fb197d1ff65ea92fe",
        "conversation_id": "62322580b151ff975f1eb495",
        "date_created": "2022-03-16T17:59:28.426000+00:00",
        "link_was_clicked": false,
        "message_data": {
          "_type": "text",
          "body": "If you're curious about any of the reports that Mike mentions, click \"Read the reports\" or just type in 'get the reports'. ",
          "has_forced_quick_replies": false,
          "has_variables": false,
          "reviewable_message": false
        },
        "recipient": "6232257fb197d1ff65ea92fe",
        "review": 0,
        "sender": "ada"
      },
      {
        "_id": "623225807973ea81fb745782",
        "answer_id": "6216a263c0c9f28ed7a16c1d",
        "answer_title": "Ada Interact > Welcome Message",
        "chatter_id": "6232257fb197d1ff65ea92fe",
        "conversation_id": "62322580b151ff975f1eb495",
        "date_created": "2022-03-16T17:59:28.455000+00:00",
        "link_was_clicked": false,
        "message_data": {
          "_type": "quick_replies",
          "has_variables": false,
          "is_forced": false,
          "quick_replies": [
            {
              "button_type": "suggestion",
              "label": "Read the reports ",
              "target": "6220f0840fffbae023fa47f0"
            },
            {
              "button_type": "suggestion",
              "label": "Get a demo of our newest features",
              "target": "62312ec34abadc6df54df263"
            },
            {
              "button_type": "suggestion",
              "label": "Need a little pick me up?",
              "target": "6226319838a50cf76ce74553"
            },
            {
              "button_type": "suggestion",
              "label": "Having issues with the stream?",
              "target": "60c8d235b4499cfc9ca3e070"
            }
          ],
          "reviewable_message": false
        },
        "recipient": "6232257fb197d1ff65ea92fe",
        "review": 0,
        "sender": "ada"
      },
      {
        "_id": "623225807973ea81fb745783",
        "answer_id": "None",
        "answer_title": null,
        "chatter_id": "6232257fb197d1ff65ea92fe",
        "conversation_id": "62322580b151ff975f1eb495",
        "date_created": "2022-03-16T17:59:28.521000+00:00",
        "link_was_clicked": false,
        "message_data": {
          "_type": "meta",
          "meta_message_data": {
            "id": "5faeb1a00aeb31f72a40bc36",
            "name": "last_answer_id",
            "new_value": "6216a263c0c9f28ed7a16c1d",
            "old_value": null,
            "scope": "meta"
          },
          "meta_message_type": "variable_change"
        },
        "recipient": "4ab42775-e590-47be-91a4-5cc99e8ae1e0",
        "review": 0,
        "sender": "bot"
      },
      {
        "_id": "623225818120de06333dcb43",
        "answer_id": "None",
        "answer_title": null,
        "chatter_id": "62322579d812c2074257c201",
        "conversation_id": "6232257ab6b44fc68056b82a",
        "date_created": "2022-03-16T17:59:29.305000+00:00",
        "link_was_clicked": false,
        "message_data": {
          "_type": "greeting",
          "external_chat_id": "09897a21-99af-4714-92b7-10990accdc93",
          "reviewable_message": false
        },
        "recipient": "ada",
        "review": 0,
        "sender": "c6e01111-3e69-42d6-9553-97bc69024e90"
      },
      {
        "_id": "623225818120de06333dcb44",
        "answer_id": "6216a263c0c9f28ed7a16c1d",
        "answer_title": "Ada Interact > Welcome Message",
        "chatter_id": "62322579d812c2074257c201",
        "conversation_id": "6232257ab6b44fc68056b82a",
        "date_created": "2022-03-16T17:59:29.453000+00:00",
        "link_was_clicked": false,
        "message_data": {
          "_type": "picture",
          "alt_text": "",
          "has_variables": false,
          "pic_url": "https://static.ada.support/images/a76040d4-f431-4956-8984-b7fc3c6a635b.svg",
          "reviewable_message": false
        },
        "recipient": "62322579d812c2074257c201",
        "review": 0,
        "sender": "ada"
      }
    ]
  }
}

export { fetchStaticAdaMessages, fetchAdaMessagesFromAdaAPI }