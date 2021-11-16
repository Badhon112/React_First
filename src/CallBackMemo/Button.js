import React from 'react'

export default React.memo(function Button({handleClick,children}) {
    console.log("Hello World Button")
    return (
        <div>
            <p className="bg-green-500">
                <button type="button" onClick={handleClick}>
                    {children}
                </button>
            </p>
        </div>
    )
}
)