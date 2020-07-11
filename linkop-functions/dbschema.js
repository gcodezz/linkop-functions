let db = {
    users: [
        {
            userId: 'drethb524ggqr5hhse1w',
            email: 'test@test.com',
            handle: 'gcodezz',
            createdAt: '2020:06-11T10:36:22:233Z',
            imageUrl: 'image/shgdhwjjw',
            bio: 'Hello, I am Ayodeji',
            website: 'https://gcodezz.com',
            location: 'Lagos, Nigeria'
        }
    ],
    screams: [
        {
            userHandle: 'user',
            body: 'this is the scream body',
            created: '2020-06-19T12:01:41.641Z',
            likeCount: 5,
            commentCount: 2
        }
    ],
    comments: [
        {
            userHandle: 'user',
            screamId: 'kjdhlhdwuiewoeiehndsab',
            body: 'cool comment',
            createdAt: '2020-06-19T12:01:41.641Z'
        }
    ],
    notifications: [
        {
            recipient: 'user',
            sender: 'Gboss',
            read: 'true | false',
            screamId: 'jdjserueikejrrkwksbdhb',
            type: 'like | comment',
            createdAt: '2019-03-15T10:59:52.789Z'
        }
    ]
}

const userDetails = {
    //Redux data
    credentials: {
        userId: 'drethb524ggqr5hhse1w',
        email: 'test@test.com',
        handle: 'gcodezz',
        createdAt: '2020:06-11T10:36:22:233Z',
        imageUrl: 'image/shgdhwjjw',
        bio: 'Hello, I am Ayodeji',
        website: 'https://gcodezz.com',
        location: 'Lagos, Nigeria'
    },
    likes: [
        {
            userHandle: 'user',
            screamId: 'kdhuydadhddjozidvsjdvjs'
        },
        {
            userHandle: 'user',
            screamId: 'wrerrwy2738iskstystdyjs'
        }
    ]
}