
const styles = {
    container: {
        border:3,
        borderStyle: "solid",
        padding: 15,
    },
}

function MultipleResult({id, title,canMulti,response}) {
    return (  
        <div style={styles.container}>
            <h1>{title}</h1>
            <p>{canMulti}</p>
            <ResponseList list={response}/>
        </div> 
        
    );
}

export default MultipleResult;


function ResponseList({list}) {
    let responseList;
    if(list!=undefined){
        responseList = list.map(
            r => (
                <Response 
                key = {r.id} 
                title={r.title} 
                />
            )
        )
    }

    return(
        <div>
            {responseList}
        </div>
    )
}

function Response({key,title}){
    return(
        <div>      
                <input type="checkbox"></input>
                <p>{title}</p>
        </div>
    );
}



