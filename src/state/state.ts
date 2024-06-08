export type PostType = {
   id: number
   postMessage: string
   likeCount: number
}
export type DialogsType = {
   id: number
   name: string
}
export type MessagesType = {
   id: number
   message: string
}
export type ProfilePageType = {
   posts: PostType[]
}
export type DialogsPageType = {
   dialogs: DialogsType[]
   messages: MessagesType[]
}

export type StateType = {
   profilePageData: ProfilePageType
   dialogsPageData: DialogsPageType
}

export const state: StateType = {
   profilePageData: {
      posts: [
         {id: 1, postMessage: "post-1", likeCount: 2},
         {id: 2, postMessage: "post-2", likeCount: 4},
         {id: 3, postMessage: "post-3", likeCount: 10},
         {id: 4, postMessage: "post-4", likeCount: 8},
      ],
   },
   dialogsPageData: {
      dialogs: [
         {id: 1, name: "Daniyel"},
         {id: 2, name: "Viktoriya"},
         {id: 3, name: "Zakhar"},
         {id: 4, name: "Andrey"},
         {id: 5, name: "Tereza"},
      ],
      messages: [
         {id: 1, message: "Hi"},
         {id: 2, message: "How is your it-kamasutra?"},
         {id: 3, message: "Yo! How are you ?"},
      ]
   }
}