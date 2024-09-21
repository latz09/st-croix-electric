const ContactForm = ({
	formData,
	handleInputChange,
	handleSubmit,
	isLoading,
	isErrorMessage,
	successMessage,
	handleFileUpload,
}) => {
	return (
		<form onSubmit={handleSubmit} className='form-container font-semibold text-dark/80'>
			<h2 className="font-bold text-2xl text-dark">Tell Us How We Can Help</h2>
			<h2>
				Thank you for choosing St. Croix Electric Inc. Please provide as many
				details and images as possible for an accurate estimate. We typically
				schedule two weeks out, but you can join our call list for earlier
				openings.
			</h2>
			<p>Please do not use your property address as the company name.</p>

			<div>
				<label htmlFor='firstName' className='form-label '>
					First Name*
				</label>
				<input
					type='text'
					id='firstName'
					name='firstName'
					value={formData.firstName}
					onChange={handleInputChange}
					required
					className='form-input '
				/>
			</div>

			<div>
				<label htmlFor='lastName' className='form-label'>
					Last Name*
				</label>
				<input
					type='text'
					id='lastName'
					name='lastName'
					value={formData.lastName}
					onChange={handleInputChange}
					required
					className='form-input'
				/>
			</div>

			<div>
				<label htmlFor='companyName' className='form-label'>
					Company Name (if applicable)
				</label>
				<input
					type='text'
					id='companyName'
					name='companyName'
					value={formData.companyName}
					onChange={handleInputChange}
					className='form-input'
				/>
			</div>

			<div>
				<label htmlFor='email' className='form-label'>
					Email*
				</label>
				<input
					type='email'
					id='email'
					name='email'
					value={formData.email}
					onChange={handleInputChange}
					required
					className='form-input'
				/>
				<p className='text-sm mt-2 italic'>
					By providing your email, you consent to receiving marketing emails and
					promotions. You can unsubscribe at any time.
				</p>
			</div>

			<div>
				<label htmlFor='phoneNumber' className='form-label'>
					Phone Number*
				</label>
				<input
					type='tel'
					id='phoneNumber'
					name='phoneNumber'
					value={formData.phoneNumber}
					onChange={handleInputChange}
					required
					className='form-input'
				/>
				<p className='text-sm mt-2 italic'>
					By providing your phone number, you agree to receive text messages
					(SMS) from St. Croix Electric Inc. You can unsubscribe at any time by
					replying STOP. Message and data rates may apply. Message frequency
					varies.
				</p>
			</div>

			<h2>Address</h2>
			<div>
				<label htmlFor='street1' className='form-label'>
					Street 1*
				</label>
				<input
					type='text'
					id='street1'
					name='street1'
					value={formData.street1}
					onChange={handleInputChange}
					required
					className='form-input'
				/>
			</div>

			<div>
				<label htmlFor='street2' className='form-label'>
					Street 2
				</label>
				<input
					type='text'
					id='street2'
					name='street2'
					value={formData.street2}
					onChange={handleInputChange}
					className='form-input'
				/>
			</div>

			<div>
				<label htmlFor='city' className='form-label'>
					City*
				</label>
				<input
					type='text'
					id='city'
					name='city'
					value={formData.city}
					onChange={handleInputChange}
					required
					className='form-input'
				/>
			</div>

			<div>
				<label htmlFor='state' className='form-label'>
					State*
				</label>
				<input
					type='text'
					id='state'
					name='state'
					value={formData.state}
					onChange={handleInputChange}
					required
					className='form-input'
				/>
			</div>

			<div>
				<label htmlFor='zipCode' className='form-label'>
					ZIP Code*
				</label>
				<input
					type='text'
					id='zipCode'
					name='zipCode'
					value={formData.zipCode}
					onChange={handleInputChange}
					required
					className='form-input'
				/>
			</div>

			<h2>Service Details</h2>
			<div>
				<label htmlFor='description' className='form-label'>
					Please provide as much information as possible regarding your project
				</label>
				<textarea
					id='description'
					name='description'
					value={formData.description}
					onChange={handleInputChange}
					className='form-input'
					rows='4'
				></textarea>
			</div>

			<h2>Your Availability</h2>
			<div>
				<label htmlFor='firstPreferredDate' className='form-label'>
					First Preferred Date*
				</label>
				<input
					type='date'
					id='firstPreferredDate'
					name='firstPreferredDate'
					value={formData.firstPreferredDate}
					onChange={handleInputChange}
					required
					className='form-input'
				/>
			</div>

			<div>
				<label htmlFor='secondPreferredDate' className='form-label'>
					Second Preferred Date
				</label>
				<input
					type='date'
					id='secondPreferredDate'
					name='secondPreferredDate'
					value={formData.secondPreferredDate}
					onChange={handleInputChange}
					className='form-input'
				/>
			</div>

			<div>
				<label htmlFor='preferredTime' className='form-label'>
					What are your preferred arrival times? (optional)
				</label>
				<select
					id='preferredTime'
					name='preferredTime'
					value={formData.preferredTime}
					onChange={handleInputChange}
					className='form-input'
				>
					<option value='anyTime'>Any time (7am-3:30pm)</option>
					<option value='morning'>Morning (7am-11am)</option>
					<option value='afternoon'>Afternoon (12pm-3:30pm)</option>
					<option value='evening'>
						Evening (After 4pm; this will incur an additional fee)
					</option>
				</select>
			</div>

			<h2>Call List</h2>
			<div>
				<label className='form-label'>
					Would you like to join our Call List to be notified of any earlier
					openings?
				</label>
				<div className="space-x-6">
					<label>
						<input
							type='radio'
							name='callList'
							value='yes'
							checked={formData.callList === 'yes'}
							onChange={handleInputChange}
							className="mr-1"
						/>
						Yes
					</label>
					<label>
						<input
							type='radio'
							name='callList'
							value='no'
							checked={formData.callList === 'no'}
							onChange={handleInputChange}
							className="mr-1"
						/>
						No
					</label>
				</div>
			</div>

			<h2>Upload Images</h2>
			<div>
				<p>
					Helpful images - Breaker box/panel with door open, blueprints or plans
					(if applicable), etc.
				</p>
				<input
					type='file'
					id='fileUpload'
					name='fileUpload'
					accept='image/*'
					onChange={handleFileUpload}
					className='form-input'
					multiple
				/>
				<p className='text-sm mt-2 italic'>
					Do not upload files with payment information. Ensure you have all
					required rights, consent, and permissions to share.
				</p>
			</div>

			

			<button
				type='submit'
				className={`bg-secondary text-dark py-2 transition duration-700 text-xl shadow font-bold rounded w-1/2 mx-auto ${
					isLoading ? 'opacity-50 cursor-not-allowed' : ''
				}`}
				disabled={isLoading}
			>
				{isLoading ? 'Submitting...' : 'Request Quote'}
			</button>

			{isErrorMessage && <p className='text-red-500'>{isErrorMessage}</p>}
			{successMessage && <p className='text-green-500'>{successMessage}</p>}
		</form>
	);
};

export default ContactForm;
