import React, { useState } from 'react'

export default function Checkbox() {

    const [liked, setLiked] = useState(true);

    const handleChange = (e) => {
        setLiked(e.target.checked);
    }

    return (
        <div>
            <div className='text-center'>
                <label>
                    <input type="checkbox" checked={liked} onChange={handleChange} />

                    I liked this
                    <p>You {liked ? 'liked' : 'did not like '} this.</p>
                </label>

            </div>

        </div>
    );
}
