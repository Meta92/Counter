import React from 'react';

function Text({count, children, type}) {
    if (type === "h1")  {
        return(
            <h1>
                <div>{children}</div>
                <div>{count}</div>
            </h1>
        )
    }
    if (type === "h2")  {
        return <h2>
                    <div>{children}</div>
                    <div>{count}</div>
                </h2>
    }
    if (type === "h3")  {
        return <h3>
                    <div>{children}</div>
                    <div>{count}</div>
                </h3>
    }
    if (type === "h4")  {
        return <h4>
                    <div>{children}</div>
                    <div>{count}</div>
                </h4>
    }
    if (type === "h5")  {
        return <h5>
                    <div>{children}</div>
                    <div>{count}</div>
                </h5>
    }
    if (type === "h6")  {
        return <h6>
                    <div>{children}</div>
                    <div>{count}</div>
                </h6>
    }
    if (type === "p")  {
        return <p>
                    <div>{children}</div>
                    <div>{count}</div>
                </p>
    }
    return (
        <span>
            <p>{children}</p>
            <p>{count}</p>    
        </span>
        
    )
    
}

export default Text;