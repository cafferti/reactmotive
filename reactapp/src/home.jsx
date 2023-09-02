const Home  = () => {
    const handleclick = ()=>{
        console.log(`hello ninjas`)
    }    

    const handleclickAgain = name =>{
        console.log(`hello ${name}`)
    }
    const username = `austin`
    return ( 
        <div className="home">
        <h2>Home Page</h2>
        <button onClick ={handleclick} >click me</button>
        <button onClick={() =>{handleclickAgain(username)}} >click me Again</button>
        </div>
        
     );
}
 
export default Home ;