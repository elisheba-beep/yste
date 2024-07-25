import SearchBar from "../SearchBar";

export default function SubscribeCard() {
  return (
    <div className="rounded-xl items-center flex flex-col gap-1 py-8 bg-black opacity-90 my-12">
      <p className="font-primaryRegular text-center p-2 text-white">
        Yes! Send me exclusive offers, unique gift ideas, and personalized tips
        for shopping and selling on yste.
      </p>
      <SearchBar
        emailBar={true}
        text="Subscribe"
        placeholder="enter your email"
        width="30%"
      />
    </div>
  );
}
