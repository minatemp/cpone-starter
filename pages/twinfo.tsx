import getData from "./api/twitter/get_data"

export default function Twinfo() {
  try {
    const userResponse = getData();
  } catch (error) {
    console.log("error")
  }

  return (
    <div>
      <h2>Twitter Data</h2>
    </div>
  )
}