import React from 'react';
import { FaqDiv } from './style';


const AddFaq =() => {
    const [data, setData] = React.useState([]);
    

return(
    <>
    <FaqDiv>
        <div className="container-fluid pt-5">
            <div className="text-center mb-4">
                <h2 className="section-title px-5"><span className="px-2">Faq</span></h2>
            </div>
            <div className="row px-xl-5 pb-3">
                Faq content goes here...
            </div>
        </div>

    </FaqDiv>

    </>
    )
}

export default AddFaq