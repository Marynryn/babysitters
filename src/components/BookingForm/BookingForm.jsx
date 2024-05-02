import React, { useState } from 'react';
import css from "./BookingForm.module.css";
import { Controller, FormProvider, useForm } from 'react-hook-form';
import Button from 'components/Button/Button';
import InputField from 'components/InputField/InputField';
import Select from 'react-select';
import sprite from "svg/symbol-defs.svg";
import { generateTimeOptions } from 'helpers/generateTimeOptions';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from 'schema/schema';

const BookingForm = ({ props, onClose }) => {
    const [isOpen, setIsOpen] = useState(false);
    const methods = useForm({
        resolver: yupResolver(schema)
    });
    const { handleSubmit, control, formState: { errors } } = methods;
    const onSubmit = (data) => {
        console.log(data);
        onClose();
    };

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
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
                    {errors.address && <span className="error-message">{errors.address.message}</span>}
                    <InputField type="phone" name="phone" placeholder="+380" className={css.input_field} />
                    {errors.phone && <span className="error-message">{errors.phone.message}</span>}
                    <InputField type="number" name="age" placeholder="Child's age" className={css.input_field} />
                    {errors.age && <span className="error-message">{errors.age.message}</span>}

                    <div className={css.time_picker_container}>
                        <div className={css.time_picker}>
                            <input
                                type="text"
                                name="meetingTime"
                                value={methods.watch("meetingTime.value") || "00:00"}
                                readOnly
                                className={css.custom_time_input}
                            />
                            <svg className={css.clock_icon} onClick={() => setIsOpen(!isOpen)} width={16} height={16}>
                                <use href={`${sprite}#icon-clock`} />
                            </svg>
                            {isOpen && (
                                <div className="text-center">
                                    <Controller
                                        name="meetingTime"
                                        control={control}
                                        defaultValue={null}
                                        render={({ field }) => (
                                            <Select
                                                {...field}
                                                options={generateTimeOptions()}
                                                menuIsOpen={isOpen}
                                                onMenuClose={() => setIsOpen(false)}
                                                autoFocus
                                                classNamePrefix="select"
                                                styles={{
                                                    menu: (provided) => ({
                                                        ...provided,
                                                        zIndex: 9999
                                                    }),
                                                    control: () => ({
                                                        display: 'none'
                                                    }),
                                                    option: (provided, state) => ({
                                                        ...provided,
                                                        backgroundColor: 'transparent',
                                                        color: state.isDisabled ? 'black' : state.isFocused ? 'black' : 'rgba(0,0,0,0.5)'
                                                    })
                                                }}
                                            />
                                        )}
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                    <InputField type="email" name="email" placeholder="Email" className={css.input_field} />
                    {errors.email && <span className="error-message">{errors.email.message}</span>}
                    <InputField type="text" name="name" placeholder="Father's or mother's name" className={css.input_field} />
                    {errors.name && <span className="error-message">{errors.name.message}</span>}
                    <InputField as="textarea" rows="6" cols="50" name="comment" placeholder="Comment" className={css.textarea} />
                    {errors.comment && <span className="error-message">{errors.comment.message}</span>}

                </div>
                <Button type="submit" className={css.submit_button}>Send</Button>
            </form>
        </FormProvider>
    );
};

export default BookingForm;
