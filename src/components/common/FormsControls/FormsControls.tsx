import React from 'react';
import styles from './FormsControls.module.css'

const FormsControls = (props: any) => {
    const showError = props.meta.touched && props.meta.error
    return (
        <div className={styles.formControl + ' ' + showError ? styles.error: ''}>
            <div>
                <textarea {...props.input} />
            </div>
            <div>
                {showError && <span>{props.meta.error}</span>}   
            </div>
        </div>
    );
};

export default FormsControls;