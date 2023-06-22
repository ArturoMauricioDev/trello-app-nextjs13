import Image from "next/image";
import { MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/24/solid";

export const Header = () => {
  return (
    <header>
      <Image
        src={"https://i66.servimg.com/u/f66/20/43/92/62/c2cdd510.jpg"}
        alt="Trello logo"
        width={300}
        height={100}
        className="w-44 md:w-56 pb-10 md:pb-0 object-contain"
      />
      <div>
        {/* Search box */}
        <form action="">
          <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
          <input type="text" />
          <button hidden> Search</button>
        </form>

        {/* Avatar */}
      </div>
    </header>
  );
};
