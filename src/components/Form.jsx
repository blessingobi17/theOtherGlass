const Form = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <form
        action=""
        className="lg:w-3/5 md:w-4/5 w-full lg:pt-28 pt-20 md:px-0 px-6"
      >
        <div className="pb-10">
          <label htmlFor="" className="text-sm">
            Name <span className="text-xs text-red-700"> (Required)</span>
          </label>
          <div className="flex md:flex-row flex-col w-full pt-4 gap-4">
            <div className="w-full">
              <input
                type="text"
                className="border-b border-b-black w-full mb-1 outline-none"
              />
              <span className="text-sm text-gray-500">First</span>
            </div>
            <div className="w-full">
              <input
                type="text"
                className="border-b border-b-black w-full mb-1 outline-none"
              />
              <span className="text-sm text-gray-500">Last</span>
            </div>
          </div>
        </div>
        <div className="pb-10 flex md:flex-row flex-col gap-4">
          <div className="w-full">
            <label htmlFor="" className="text-sm">
              Email <span className="text-xs text-red-700"> (Required)</span>
            </label>
            <div className="flex w-full pt-4 gap-4">
              <div className="w-full">
                <input
                  type="text"
                  className="border-b border-b-black w-full mb-1 outline-none"
                />
              </div>
            </div>
          </div>
          <div className="w-full">
            <label htmlFor="" className="text-sm">
              Phone <span className="text-xs text-red-700"> (Required)</span>
            </label>
            <div className="flex w-full pt-4 gap-4">
              <div className="w-full">
                <input
                  type="text"
                  className="border-b border-b-black w-full mb-1 outline-none"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="pb-10">
          <label htmlFor="" className="text-sm">
            Company Name
          </label>
          <input
            type="text"
            className="border-b border-b-black w-full mb-1 outline-none pt-4"
          />
        </div>
        <div className="pb-5">
          <label htmlFor="" className="text-sm">
            Address <span className="text-xs text-red-700"> (Required)</span>
          </label>
          <div className="w-full">
            <input
              type="text"
              className="border-b border-b-black w-full mb-1 outline-none pt-4"
            />
            <span className="text-sm text-gray-500">Street Address</span>
          </div>
        </div>
        <div className="pb-10">
          <div className="grid md:grid-cols-2 grid-cols-1 w-full gap-4">
            <div className="w-full">
              <input
                type="text"
                className="border-b border-b-black w-full mb-1 outline-none"
              />
              <span className="text-sm text-gray-500">City</span>
            </div>
            <div className="w-full">
              <input
                type="text"
                className="border-b border-b-black w-full mb-1 outline-none"
              />
              <span className="text-sm text-gray-500">
                State / Province / Region
              </span>
            </div>
            <div className="w-full">
              <input
                type="text"
                className="border-b border-b-black w-full mb-1 outline-none"
              />
              <span className="text-sm text-gray-500">ZIP / Postal Code</span>
            </div>
            <div className="w-full">
              <input
                type="text"
                className="border-b border-b-black w-full mb-1 outline-none"
              />
              <span className="text-sm text-gray-500">Country</span>
            </div>
          </div>
        </div>
        <div className="pb-5">
          <label htmlFor="" className="text-sm">
            Comments
          </label>
          <textarea
            name=""
            id=""
            className="border-b border-b-black w-full mb-1 outline-none pt-4 pb-16"
          ></textarea>
        </div>
        <fieldset className="space-y-3 pb-5">
          <div className="flex items-center gap-2 custom-radio">
            <input type="checkbox" name="" id="" className="h-4 w-4 " />
            <label htmlFor="" className="text-sm">
              Yes, I would like to receive news about The Other Glasses through
              email.
            </label>
          </div>
          <div className="flex items-center gap-2 custom-radio">
            <input type="checkbox" name="" id="" className="h-4 w-4 " />
            <label htmlFor="" className="text-sm">
              Yes, I have read and accept the Privacy Policy.
            </label>
          </div>
        </fieldset>
        <button className="bg-black text-white px-9 py-3 rounded-lg text-sm">
          Send
        </button>
      </form>
    </div>
  );
};

export default Form;
