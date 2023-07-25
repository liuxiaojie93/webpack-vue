export const routes = [
    {
        path:"/",
        redirect:"index"
    },
    {
        path:"/index",
        component:()=>import("@/pages/index/index.vue"),
        meta:{}
    }
]