import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {admin_login, messageClear} from "../../store/Reducers/authReducer";
import { PropagateLoader } from "react-spinners";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";


const AdminLogin = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {loader, errorMessage, successMessage} = useSelector(state => state.auth)

    const [state, setState] = React.useState({
        email: '',
        password: '',
    })

    const inputHandler = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value,

        })
    }

    const submitHandler = (event) => {
        event.preventDefault();
        dispatch(admin_login(state))
    }

    const overrideStyle = {
        display: 'flex',
        margin: '0 auto',
        height: '24px',
        justifyContent: 'center',
        alignItem: 'center'
    }

    useEffect(() => {
        if (errorMessage) {
            toast.error(errorMessage);
            dispatch(messageClear())
        }
        if (successMessage) {
            toast.success(successMessage);
            dispatch(messageClear());
            navigate('/');
        }
    },[errorMessage, successMessage, dispatch, navigate]);

    return (
        <div className={'min-w-screen min-h-screen bg-[#cdcae9] flex justify-center items-center'}>
            <div className={'w-[350px] text-[#ffffff] p-2'}>
                <div className={'bg-[#6f68d1] p-4 rounded-md'}>
                    <div className={'h-[70px] flex justify-center items-center'}>
                        <div className={'w-[180px] h-[50px]'}>
                            <img className={'w-full h-full  '} src={'http://localhost:3000/images/logo.png'} alt={''} />
                        </div>
                    </div>
                    <form onSubmit={submitHandler}>
                        <div className={'flex flex-col w-full gap-1 mb-3'}>
                            <label htmlFor="email">Email</label>
                            <input onChange={inputHandler} value={state.email}
                                   className={'px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md '}
                                   type={'email'} name={'email'} placeholder={'Email'} id={'email'} required/>
                        </div>
                        <div className={'flex flex-col w-full gap-1 mb-3'}>
                            <label htmlFor="password">Password</label>
                            <input onChange={inputHandler} value={state.password}
                                   className={'px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md '}
                                   type={'password'} name={'password'} placeholder={'Password'} id={'password'} required/>
                        </div>
                        <button
                            disabled={loader ? true : false}
                            className={'bg-slate-800 w-full hover:shadow-blue-300/50 hover:shadow-lg text-white rounded-md py-1 mb-3'}>
                            {
                                loader ? <PropagateLoader color='#fff' cssOverride={overrideStyle} /> : 'Login'
                            }
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;