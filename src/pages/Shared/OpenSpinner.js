import React from "react";
import spinner from "../../media/images/spinner.gif";

const OpenSpinner = () => {
  return (
    <div>
      {/* const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []); */}
      {/* <div class="h-screen flex items-center justify-center ">
        <div class="w-24 h-24 border-l-2 border-red-900 rounded-full animate-spin"></div>
      </div> */}
      <div className="h-screen flex items-center justify-center">
        <img src={spinner} alt="" />
      </div>
    </div>
  );
};

export default OpenSpinner;
