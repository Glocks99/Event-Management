const LoginPage = () => {
    const handleSubmit = (e) => {
        e.preventDefault();

        // Get form values
        const email = e.target.email.value;
        const password = e.target.password.value;
        const remember = e.target.remember.checked;

        // Basic validation
        if (!email) {
            alert('Please enter your email');
            return;
        }

        if (!password) {
            alert('Please enter your password');
            return;
        }

        // Email format validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }

        // Password validation - minimum 6 characters
        if (password.length < 6) {
            alert('Password must be at least 6 characters long');
            return;
        }

        // Form data object
        const formData = {
            email,
            password,
            remember
        };

        // Log form data (temporary)
        console.log('Form submitted with data:', formData);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100">
            <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md border-2 border-transparent hover:border-blue-400 transition duration-300">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Welcome Back</h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="remember"
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                            />
                            <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                                Remember me
                            </label>
                        </div>
                        <a href="#" className="text-sm text-blue-600 hover:text-blue-800 transition duration-300">
                            Forgot password?
                        </a>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 flex items-center justify-center group"
                    >
                        <span className="group-hover:tracking-wider transition-all duration-300">Sign In</span>
                    </button>
                </form>
                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">
                        Don't have an account?{' '}
                        <a href="/register" className="text-blue-600 hover:text-blue-800 font-medium transition duration-300">
                            Sign up
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;