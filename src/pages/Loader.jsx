import { FadeLoader } from "react-spinners";

export default function Loader({ loading, color = "#ec4899", size = 150 }) {
  if (!loading) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-white bg-opacity-70 z-50">
      <FadeLoader color={color} />
    </div>
  );
}
