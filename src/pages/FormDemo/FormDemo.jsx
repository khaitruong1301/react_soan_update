import React, { useState } from 'react'

const FormDemo = () => {
    const [userLogin, setUserLogin] = useState({
        values:{
            email:'',
            password:''
        },
        errors:{
            email:'',
            password:''
        }
    })

    const handleChange = (e) => {
        let {name,value} = e.target;
        let values = {...userLogin.values}; //Clone giá trị hiện ra 1 biến mới
        let errors = {...userLogin.errors};// Clone lỗi hiện tại ra 1 biến mới
        let dataType = e.target.getAttribute('data-type');
        values[name] = value; //Gán mới thuộc tính value
        let messError = '';
        if(value[name] === '') {
            messError = `${name} is required!`;
        }else {
            //Check các format regex
            if(dataType){
                switch(dataType){
                    case 'email' : {
                        let regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                        if(!regexEmail.test(values[name])) {
                            messError = 'email is in valid!';
                        };break;
                    }
                }
            }
            
        }
        //Gán lỗi trên trường name sau khi đã xử lý
        errors[name] = messError;
        //Sau khi đã xử lý values và errors gán vào state cả values và errors mới
        setUserLogin({
            values:values,
            errors:errors
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userLogin)
    }
    return (
        <div className='container mx-auto'>
            <form className="w-full max-w-sm mx-auto" onSubmit={handleSubmit}>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                    <div onSubmit={handleSubmit}  className="space-y-6">

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input data-type="email" name="email" id="email"  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"     onChange={handleChange} />
                            {userLogin.errors.email && <p className='text-red-500'>{userLogin.errors.email}</p>}
                        </div>


                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                            <input type="password" name="password" id="password" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" onChange={handleChange} />
                        </div>
                        
                        <div>
                            <button type="submit" className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Đăng Nhập
                            </button>
                        </div>
                    </div>
                </div>
            </form>

        </div>
    )
}

export default FormDemo