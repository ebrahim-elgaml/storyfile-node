# storyfile-node

[Task link](https://www.evernote.com/shard/s107/sh/06d7648d-fc09-40b2-918a-e6e2b827ab64/c8f76ecddb5440d2)

#### How to run:
* git clone
* docker-compose up


### endpoints

* [GET question](#get-question)
* [POST question](#post-question)
* [GET answer](#post-answer)
* [POST answer](#post-answer)

## Get question
type: get
url: /question
List all questions

response:
```
status: 200
[
    {
        "_id": "5967f70644b21c44ea1cb050",
        "audio_link": "http://res.cloudinary.com/dvfjcop5o/video/upload/v1499985657/jpy6bbxnd0paissvzrmu.flac",
        "__v": 0,
        "answers": [],
        "created_at": "2017-07-15T13:03:32.357Z"
    },
    {
        "_id": "5967f92bbf87204532faa337",
        "audio_link": "http://res.cloudinary.com/dvfjcop5o/video/upload/v1499986207/esmtue1btl9vrblqbvnl.flac",
        "transcript": "what we do is if we need that extra push over the cliff you know we do put up to eleven exactly one loud want you just make ten louder and make ten be the top \nnumber and make that a little louder \nthese are two eleven ",
        "__v": 0,
        "answers": [],
        "created_at": "2017-07-13T22:50:19.426Z"
    },
    {
        "_id": "59690f880de9b64d5cd90313",
        "audio_link": "http://res.cloudinary.com/dvfjcop5o/video/upload/v1500057479/tol3qdwiiuwa7jbm8dwj.flac",
        "transcript": "what we do is if we need that extra push over the cliff you know we do put up to eleven exactly one loud want you just make ten louder and make ten be the top \nnumber and make that a little louder \nthese are two eleven ",
        "__v": 1,
        "answers": [
            {
                "video_link": "http://res.cloudinary.com/dvfjcop5o/video/upload/v1500123791/r51cwvtz7tfe39ga1qvw.flac",
                "transcript": "can you tell me your name ",
                "_id": "596a1290bbccae137836bed8",
                "created_at": "2017-07-15T13:03:12.289Z"
            }
        ],
        "created_at": "2017-07-14T18:38:00.390Z"
    },
    {
        "_id": "596949a6cfa924515b92d10d",
        "audio_link": "http://res.cloudinary.com/dvfjcop5o/video/upload/v1500072357/lodrbqza34idyenc3o4v.flac",
        "transcript": "what we do is if we need that extra push over the cliff you know we do put up to eleven exactly one loud want you just make ten louder and make ten be the top \nnumber and make that a little louder \nthese are two eleven ",
        "__v": 0,
        "answers": [],
        "created_at": "2017-07-14T22:45:58.250Z"
    },
    {
        "_id": "596956799faaf8516a7d588d",
        "audio_link": "http://res.cloudinary.com/dvfjcop5o/video/upload/v1500075640/apqebituateigszvptzr.flac",
        "transcript": "what we do is if we need that extra push over the cliff you know we do put up to eleven exactly one loud want you just make ten louder and make ten be the top \nnumber and make that a little louder \nthese are two eleven ",
        "__v": 0,
        "answers": [],
        "created_at": "2017-07-14T23:40:41.058Z"
    },
    {
        "_id": "596956c09faaf8516a7d588e",
        "audio_link": "http://res.cloudinary.com/dvfjcop5o/video/upload/v1500075711/avajpmrvrsblan7rxpw4.flac",
        "transcript": "what we do is if we need that extra push over the cliff you know we do put up to eleven exactly one loud want you just make ten louder and make ten be the top \nnumber and make that a little louder \nthese are two eleven ",
        "__v": 0,
        "answers": [],
        "created_at": "2017-07-14T23:41:52.944Z"
    },
    {
        "_id": "59695bc968fa12524f7742e2",
        "audio_link": "http://res.cloudinary.com/dvfjcop5o/video/upload/v1500077000/h0wx09k8pxbz45imd9xq.flac",
        "transcript": "what we do is if we need that extra push over the cliff you know we do put up to eleven exactly one loud want you just make ten louder and make ten be the top \nnumber and make that a little louder \nthese are two eleven ",
        "__v": 0,
        "answers": [],
        "created_at": "2017-07-15T00:03:21.083Z"
    },
    {
        "_id": "59695c22181cd8526fae6bcf",
        "audio_link": "http://res.cloudinary.com/dvfjcop5o/video/upload/v1500077089/gvspdilt4ijpcasd80xl.flac",
        "transcript": "what we do is if we need that extra push over the cliff you know we do put up to eleven exactly one loud want you just make ten louder and make ten be the top \nnumber and make that a little louder \nthese are two eleven ",
        "__v": 0,
        "answers": [],
        "created_at": "2017-07-15T00:04:50.071Z"
    },
    {
        "_id": "59695e077c55c65322b087d0",
        "audio_link": "http://res.cloudinary.com/dvfjcop5o/video/upload/v1500077574/ubj7gaqtnspsd0uyqv06.ogg",
        "transcript": "what we do is if we need that extra push over the cliff you know we do put up to eleven exactly one loud want you just make ten louder and make ten be the top \nnumber and make that a little louder \nthese are two eleven ",
        "__v": 0,
        "answers": [],
        "created_at": "2017-07-15T00:12:55.086Z"
    },
    {
        "_id": "59695e76900c875333fffd40",
        "audio_link": "http://res.cloudinary.com/dvfjcop5o/video/upload/v1500077685/qtoevmhkqzrhsuaruuev.flac",
        "transcript": "what we do is if we need that extra push over the cliff you know we do put up to eleven exactly one loud want you just make ten louder and make ten be the top \nnumber and make that a little louder \nthese are two eleven ",
        "__v": 0,
        "answers": [],
        "created_at": "2017-07-15T00:14:46.267Z"
    },
    {
        "_id": "596a0e3ea6f221047a3b1222",
        "audio_link": "http://res.cloudinary.com/dvfjcop5o/video/upload/v1500122686/vxbhnxtf53v3hsx3f4qa.flac",
        "transcript": "what we do is if we need that extra push over the cliff you know we do put up to eleven exactly one loud want you just make ten louder and make ten be the top \nnumber and make that a little louder \nthese are two eleven ",
        "__v": 0,
        "answers": [],
        "created_at": "2017-07-15T12:44:46.570Z"
    }
]
```


## POST question
type: POST
url: /question
Create a question

request:
```
{
    "file": audio file
}
```

response:
```
status: 201
{
    "data": {
        "videoId": 96,
        "transcription": "bla bla",
        "videoUrl": "https://storyfilestage.com:7070/video/96"
    }
}
```
## Get answer
type: get
url: /answer
List all answer

response:
```
status: 200
[
    {
        "_id": "596bdf8f58f9ea0c15752386",
        "video_link": "http://res.cloudinary.com/dvfjcop5o/video/upload/v1500241799/dcvl37ww5aiuref2ldmv.mp4",
        "transcript": "my niece Chas \nand I'm trying to communicate with the spirit \nthe person who died in this very spot \ncan you tell me your name ",
        "_question": "596bdf5758f9ea0c15752385",
        "__v": 0,
        "created_at": "2017-07-16T21:50:07.269Z"
    }
]

```
## POST answer
type: POST
url: /answer
list all answerss

request:
```
{
    "file": video file,
    "q_id": question_id
}
```

response:
```
status: 201
{
    "transcript": "my niece Chas \nand I'm trying to communicate with the spirit \nthe person who died in this very spot \ncan you tell me your name "
}
