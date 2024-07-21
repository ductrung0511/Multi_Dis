import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { supabase } from './lib/supabase'
import AdminDashboard from './components/AdminDashboard/AdminDashboard'
import LoginScreen from './components/Login'
import AuthProvider from './lib/AuthProvider'
import { useAuth } from './lib/AuthProvider'
import { ADDRCONFIG } from 'dns'


function App() {
  console.log('....')

  return (
    // <AuthProvider>
    //   {/* <LoginScreen/> */}
    // </AuthProvider>
    
    
    <AdminDashboard/>
    
//     <div className="flex flex-col items-center  bg-gray-100 p-4">
//       <button className="self-start mb-4">
//         <svg
//           className="w-6 h-6 text-gray-600"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M15 19l-7-7 7-7"
//           />
//         </svg>
//       </button>
//       <div className="flex flex-col items-center">
//         <img
//           src="https://imgbb.host/images/imagee4c47f4b81ad6f10.png"
//           className="w-40 h-40 object-contain rounded-full mb-4"
//           alt="E24 logo"
//         />
//         <p className="text-4xl font-extrabold mb-5">E24</p>
//       </div>
//       <h2 className="text-2xl font-semibold mb-6">Welcome back.</h2>

//       <label className="block text-sm font-medium text-gray-700">
//             Email
//       </label>
//       <input
//         type="email"
//         value={email.value}
//         onChange={(e) => setEmail({ value: e.target.value, error: '' })}
//         className={`mt-1 block w-full px-3 py-2 border ${
//           email.error ? 'border-red-500' : 'border-gray-300'
//         } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
//       />
//       {email.error && (
//         <p className="mt-2 text-sm text-red-600">{email.error}</p>
//       )}
// {/* 
//       <div className="">
//         <div className="mb-4">
          
          
//         </div>
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700">
//             Mật khẩu
//           </label>
//           <input
//             type="password"
//             value={password.value}
//             onChange={(e) => setPassword({ value: e.target.value, error: '' })}
//             className={`mt-1 block w-full px-3 py-2 border ${
//               password.error ? 'border-red-500' : 'border-gray-300'
//             } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
//           />
//           {password.error && (
//             <p className="mt-2 text-sm text-red-600">{password.error}</p>
//           )}
//         </div>
//       </div> */}
//       {/* <div className="flex justify-end w-full max-w-md mb-6">
//         <button
//           className="text-sm text-blue-500"
//         >
//           Quên mật khẩu?
//         </button>
//       </div> */}
//       {/* <button
//         disabled={loading}
//         onClick={onLoginPressed}
//         className={`w-full max-w-md px-4 py-2 font-semibold text-white bg-blue-500 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
//           loading ? 'opacity-50 cursor-not-allowed' : ''
//         }`}
//       >
//         {loading ? 'Đang đăng nhập...' : 'Đăng Nhập'}
//       </button> */}
//       {/* <div className="flex flex-row mt-4">
//         <p>Chưa có tài khoản - </p>
//         <Link href="/(auth)/RegisterScreen" className="font-bold text-blue-500">
//           Tạo tài khoản mới
//         </Link>
//       </div> */}
//     </div>
  )
}

export default App
