export default {
    path:'/cinema',
    component:()=>import('@/views/Cinema'),
    children:[
        {
            path:'cliList',
            component:()=>import('@/components/CliList')
        },
        {
            path:'/cinema',
            redirect:'/cinema/cliList'
        }
    ]
}