function ObjectResult({id, title}) {
const styles = {
    container: {
        border:3,
        borderStyle: "solid",
        padding: 15,
    },
}

    return (  
        <div style={styles.container}>
            <h1>{title}</h1>
            <form>
                <input type="text"></input>
            </form>
        </div> 
        
    );
}

export default ObjectResult;