
const RegistrationForm = () => {
  return (
    <div className="border border-orange-500 p-6 max-w-4xl mx-auto mt-10 mb-10 bg-white rounded-lg shadow-2xl">
      <h2 className="text-center text-white bg-[#2e5c84] font-bold text-lg py-2 mb-4 rounded-md">
        Register Here
      </h2>
      <p className="text-red-600 text-sm mb-6">* marked fields are required</p>

      <form className="space-y-4">
        <div>
          <label className="block ">
            * Candidate's Name:
            <input
              type="text"
              placeholder="Enter your Name"
              className="w-full border rounded-full px-3 py-1 mt-1"
              required
            />
          </label>
        </div>

        <div>
          <label className="block ">
            * Father's Name:
            <input
              type="text"
              placeholder="Enter your Father's Name"
              className="w-full border rounded-full px-3 py-1 mt-1"
              required
            />
          </label>
        </div>

        <div>
          <label className="block ">
            * Date of Birth:
            <p className="text-xs text-orange-500">
              Use the down caret symbol located at the end of this date field to
              enter your DoB using the field calendar option.
              <br />
              Example: If DoB is 5 Jan 1990, please enter "01 05 1990".
            </p>
            <input
              type="date"
              className="w-full border rounded px-3 py-1 mt-1"
              required
            />
          </label>
        </div>

        <div>
          <label className="block ">
            * Mobile Number:
            <p className="text-xs text-red-600">
              (Please provide only 10 digits for your Mobile Number, without any
              ISD or STD code)
            </p>
            <input
              type="tel"
              maxLength="10"
              placeholder="Enter your Mobile Number"
              className="w-full border rounded-full px-3 py-1 mt-1"
              required
            />
          </label>
        </div>

        <div>
          <label className="block ">
            * Email:
            <input
              type="email"
              placeholder="Enter your Email"
              className="w-full border rounded-full px-3 py-1 mt-1"
              required
            />
          </label>
        </div>

        <div>
          <label className="block ">
            * Password:
            <input
              type="password"
              placeholder="Enter your Password"
              className="w-full border rounded-full px-3 py-1 mt-1"
              required
            />
          </label>
        </div>

        <div>
          <label className="block ">
            * Nationality:
            <input
              type="text"
              placeholder="Enter your Nationality"
              className="w-full border rounded-full px-3 py-1 mt-1"
              required
            />
          </label>
        </div>

        <div>
          <label className="block ">* Gender:</label>
          <div className="flex space-x-4 mt-1">
            <label>
              <input type="radio" name="gender" value="male" required /> Male
            </label>
            <label>
              <input type="radio" name="gender" value="female" /> Female
            </label>
            <label>
              <input type="radio" name="gender" value="others" /> Others
            </label>
          </div>
        </div>

        {/* .<div>
          <label className="block ">
            * College Name:
            <select className="w-full border rounded px-3 py-1 mt-1" required>
              <option value="">-- Select --</option>
              <option>College A</option>
              <option>College B</option>
            </select>
          </label>
        </div> */}
        <div>
          <label className="block ">
            * College Name:
            <input
              type="text"
              placeholder="Enter your College Name"
              className="w-full border rounded-full px-3 py-1 mt-1"
              required
            />
          </label>
        </div>

        {/* <div>
          <label className="block ">
            * Stream:
            <select className="w-full border rounded px-3 py-1 mt-1" required>
              <option>AGRICULTURAL ENGINEERING</option>
              <option>COMPUTER SCIENCE</option>
              <option>MECHANICAL</option>
            </select>
          </label>
        </div> */}
         <div>
          <label className="block ">
            * Stream:
            <input
              type="text"
              placeholder="Enter your Stream"
              className="w-full border rounded-full px-3 py-1 mt-1"
              required
            />
          </label>
        </div>

        <div>
          <label className="block ">
            * Address Line 1:
            <input
              type="text"
              placeholder="Enter your Address1"
              className="w-full border rounded-full px-3 py-1 mt-1"
              required
            />
          </label>
        </div>

        <div>
          <label className="block ">
            * Address Line 2:
            <input
              type="text"
              placeholder="Enter your Address2"
              className="w-full border rounded-full px-3 py-1 mt-1"
            />
          </label>
        </div>

        {/* <div>
          <label className="block ">
            * State:
            <select className="w-full border rounded px-3 py-1 mt-1" required>
              <option value="">-- Select --</option>
              <option>West Bengal</option>
              <option>Maharashtra</option>
              <option>Delhi</option>
            </select>
          </label>
        </div> */}
        <div>
          <label className="block ">
            * State:
            <input
              type="text"
              placeholder="Enter your State"
              className="w-full border rounded-full px-3 py-1 mt-1"
            />
          </label>
        </div>

        <div>
          <label className="block ">
            * District:
            <input
              type="text"
              placeholder="Enter your District"
              className="w-full border rounded-full px-3 py-1 mt-1"
              required
            />
          </label>
        </div>

        <div>
          <label className="block ">
            * Pin:
            <input
              type="text"
              placeholder="Enter your Pin"
              className="w-full border rounded-full px-3 py-1 mt-1"
              required
            />
          </label>
        </div>

        <div className="flex space-x-4 mt-6">
          <button
            type="submit"
            className="bg-[#2e5c84] cursor-pointer text-white rounded-md hover:bg-gradient-to-r from-[#2e5c84] to-orange-500 transition font-medium px-4 py-2"
          >
            Submit
          </button>
          <button
            type="reset"
            className="bg-[#2e5c84] cursor-pointer text-white rounded-md hover:bg-gradient-to-r from-[#2e5c84] to-orange-500 transition font-medium px-4 py-2"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
