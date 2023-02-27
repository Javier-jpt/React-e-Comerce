import Logoh from "./Logoh";
import Login from "./Login";
import Search from "./Search";
import Shopping from "./Shopping";
import Singin from "./Singin";

const Navbar = () => {
  return (
    <div class="min-h-full">
      <nav class="bg-gray-800">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="flex h-16 items-center justify-between">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <Logoh />
              </div>
                <div class="ml-10 flex items-right space-x-4">
                  <button class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Sing In
                  </button>

                  <button class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Log In
                  </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
};

export default Navbar;
