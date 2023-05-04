import React from 'react';
import styles from './addPage.module.css'
interface AddProps {
    // : string;
}

const Add: React.FC<AddProps> = ({  }) => {
    return (
        <div className={styles.add}>
            <input className={styles.input} type='text' placeholder='Enter Title'/>
            <input className={styles.input} type='text' placeholder='Enter Category'/>
            <input className={styles.input} type='number' placeholder='Enter Price'/>
            <input className={styles.input} type='number' placeholder='Enter Quantity'/>
        </div>
    );
};

export default Add;
