const Home  = () => {
    const handleclick = ()=>{
        console.log(`hello ninjas`)
    }    

    const handleclickAgain = name =>{
        console.log(`hello ${name}`)
    }
    return ( 
        <div className="home">
        <h2>Home Page</h2>
        <button onClick ={handleclick} >click me</button>
        <button onClick={() =>{handleclickAgain(`mario`)}} >click me Again</button>
        </div>
        
     );
}
 
export default Home ;