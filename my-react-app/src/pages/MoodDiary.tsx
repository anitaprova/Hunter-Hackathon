const MoodDiary = () => {
  function search() {
    alert(`You entered the form`);
  }
  
  return (
    <>
      <div className="bg-white flex flex-col ml-50 mr-50 mt-10 p-5 rounded-3xl shadow-light text-pink text-2xl">
        <form action={search} className="flex flex-col gap-y-10">
          <p>How are you today?</p>

          <p>Upload your day</p>

          <div>
            <p>Notes</p>
            <textarea className="bg-lightpink w-full rounded-xl text-lg" />
          </div>

          <button
            className="bg-hotpink p-3 rounded-xl text-white"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default MoodDiary;
