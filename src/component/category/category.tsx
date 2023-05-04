import React from 'react';
import styles from './category.module.css'
interface CategoryProps {
    category : string;
}

const Category: React.FC<CategoryProps> = ({category}) => {
    return (
        <div className={styles.category}>
            <p>{category}</p>
        </div>
    );
};

export default Category;
