export default ({app,redirect})=>{
    console.log('插件')
    app.router.beforeEach((to,from,next)=>{
        // console.log('插件配置',to)
        // if(to.name=='login'||to.name=='reg')
        next()
        // else
        // redirect({name:"login"})
    })
    app.router.afterEach((to,from)=>{
        // console.log('插件全局后置守卫')
    })
}