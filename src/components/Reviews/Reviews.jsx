import BookingForm from "components/BookingForm/BookingForm";
import Button from "components/Button/Button";
import Modal from "components/Modal/Modal";
import ReviewItem from "components/ReviewItem/ReviewItem";
import { useState } from "react";


const Reviews = ({ user }) => {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(!modalOpen);
    }
    return (
        <div className=''>
            <ul className="{css.reviews_list}">
                {user.reviews.map((review, index) => (<li className='' key={index}>
                    <ReviewItem

                        reviewerName={review.reviewer}
                        reviewerRating={review.rating}
                        comment={review.comment}
                    /></li>
                ))}</ul>
            <Button type={"button"} onClick={openModal}>Make an appointment</Button>
            <Modal isOpen={modalOpen} onClose={setModalOpen} >
                <BookingForm props={user} />
            </Modal>
        </div>
    );
};
export default Reviews;