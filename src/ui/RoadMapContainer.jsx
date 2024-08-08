import React, { Fragment } from "react";

function RoadMapContainer({children}) {
    const childrenArray = React.Children.toArray(children);
    return (
        <div className="my-20 flex gap-4  text-sm text-borderColor">
            {childrenArray.map((child, index) => (
                <Fragment key={index}>
                    {child}
                    {index < childrenArray.length - 1 && (
                        <span className="mx-2">/</span>
                    )}
                </Fragment>
            ))}
        </div>
    )
}

export default RoadMapContainer
