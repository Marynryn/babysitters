import React, { useState } from 'react';
import css from "./BookingForm.module.css";
import { Formik, Form } from 'formik';
import Button from 'components/Button/Button';
import InputField from 'components/InputField/InputField'; // Ваш компонент InputField
import Select from 'react-select';
import sprite from "svg/symbol-defs.svg";
const BookingForm = ({ props }) => {
    const [meetingTime, setMeetingTime] = useState(null);
    const [isTimePickerOpen, setIsTimePickerOpen] = useState(false);

    const timeOptions = [
        { value: '09:00', label: '09:00' },
        { value: '09:30', label: '09:30' },
        { value: '10:00', label: '10:00' },
        // Добавьте другие временные опции здесь
    ];

    const handleTimeChange = (selectedOption) => {
        setMeetingTime(selectedOption.value);
        setIsTimePickerOpen(false);
    };

    return (
        <Formik
            initialValues={{
                address: '',
                phone: '',
                age: '',
                email: '',
                name: '',
                comment: ''
            }}
            onSubmit={(values, { resetForm }) => {
                console.log(values);
                resetForm();
            }}
        >
            {({ values, handleChange }) => (
                <Form className={css.form}>
                    <h4 className={css.form_title}>Make an appointment with a babysitter</h4>
                    <p className={css.form_description}>Arranging a meeting with a caregiver for your child is the first step to creating a safe and comfortable environment. Fill out the form below so we can match you with the perfect care partner.</p>
                    <div className={css.nanny_info}>
                        <div>
                            <img className={css.nanny_photo} alt="nanny" src={props.avatar_url} width={96} height={96} />
                        </div>
                        <div>
                            <p>Your Nanny</p>
                            <h3>{props.name}</h3>
                        </div>
                    </div>
                    <div className={css.form_fields}>
                        <InputField type="text" name="address" placeholder="Address" className={css.input_field} />
                        <InputField type="phone" name="phone" placeholder="+380" className={css.input_field} />
                        <InputField type="number" name="age" placeholder="Child's age" className={css.input_field} />
                        <div className={css.time_picker_container}>
                            <div className={css.time_picker}>
                                <div className={css.time_picker_header} onClick={() => setIsTimePickerOpen(!isTimePickerOpen)}>
                                    <svg className={css.clock_icon} viewBox="0 0 24 24" onClick={() => setIsTimePickerOpen(!isTimePickerOpen)} width={16} height={16}>
                                        <use href={`${sprite}#icon-clock`} />
                                    </svg>
                                </div>
                                {isTimePickerOpen && (
                                    <div className={css.time_picker_overlay}>
                                        <Select
                                            options={timeOptions}
                                            value={meetingTime ? { value: meetingTime, label: meetingTime } : null}
                                            onChange={handleTimeChange}
                                            menuIsOpen={isTimePickerOpen}
                                            onMenuClose={() => setIsTimePickerOpen(false)}
                                            autoFocus
                                            classNamePrefix="select"
                                            styles={{
                                                menu: (provided) => ({ ...provided, zIndex: 9999 }), // Устанавливаем z-index чтобы список был поверх других элементов
                                                control: () => ({
                                                    display: 'none' // Скрываем поле ввода
                                                }),
                                                option: (provided) => ({
                                                    ...provided,
                                                    backgroundColor: 'transparent' // Прозрачный фон для опций
                                                })
                                            }}
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                        <InputField type="email" name="email" placeholder="Email" className={css.input_field} />
                        <InputField type="text" name="name" placeholder="Father's or mother's name" className={css.input_field} />
                        <InputField as="textarea" rows="6" cols="50" name="comment" placeholder="Comment" className={css.textarea} />
                    </div>
                    <Button type="submit" className={css.submit_button}>Send</Button>
                </Form>
            )}
        </Formik>
    );
};

export default BookingForm;
