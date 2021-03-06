import React from "react";
import "./collection-item.scss";

const ColletionItem = ({ name, price, imageUrl }) => {
    return (
        <div className="collection-item">
            <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
        </div>
    );
};

export default ColletionItem;