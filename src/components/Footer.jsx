import React from 'react'
import { logo } from '../assets'

function Footer() {
    const date = new Date();
  return (
    <div>
        <footer class="bg-blue-100/80 font-sans dark:bg-gray-900">
    <div class="container px-6 py-12 mx-auto">
        
        
        <hr class="my-6 border-gray-200 md:my-8 dark:border-gray-700 h-2" />
        
        <div class="sm:flex sm:items-center sm:justify-between">
            <div class="flex items-center justify-center gap-4 hover:cursor-pointer">
                <h1>Get in touch to work together</h1>
                {/* <img src={logo} width="130" height="110" alt="" />
                <img src="https://www.svgrepo.com/show/303128/download-on-the-app-store-apple-logo.svg" width="130" height="110" alt="" /> */}
            </div>
            
            <div class="flex gap-4 hover:cursor-pointer items-center justify-center pt-6 sm:pt-0">
                <img src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg" width="30" height="30" alt="fb" />
                <img src="https://www.svgrepo.com/show/303115/twitter-3-logo.svg" width="30" height="30" alt="tw" />
                <img src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg" width="30" height="30" alt="inst" />
                <img src="https://www.svgrepo.com/show/94698/github.svg" class="" width="30" height="30" alt="gt" />
                <img src="https://www.svgrepo.com/show/22037/path.svg" width="30" height="30" alt="pn" />
                <img src="https://www.svgrepo.com/show/28145/linkedin.svg" width="30" height="30" alt="in" />
                <img src="https://www.svgrepo.com/show/22048/dribbble.svg" class="" width="30" height="30" alt="db" />
            </div>
        </div>
        <p class="font-sans p-8 text-center md:text-lg md:p-4 pt-4">© {date.getFullYear()}. All rights reserved.</p>
    </div>
</footer>
    </div>
  )
}

export default Footer