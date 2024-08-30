<script lang="ts">
  import { base } from '$app/paths';
  import * as m from "$lib/paraglide/messages.js";
  import EmailIcon from './svg/EmailIcon.svelte';
  import MobileIcon from './svg/MobileIcon.svelte';
  import TelegramIcon from './svg/TelegramIcon.svelte';

  let year = new Date().getFullYear();

</script>

<footer class="container wrapper mx-auto mt-auto my-6 pt-10" id="contact">
    <div class="bg-white p-8 lg:p-16 border border-gray-200 rounded-lg shadow-md">
        <div class="flex flex-col gap-10 xl:flex-row mb-4">
            <div class="flex flex-col md:flex-row gap-5 flex-1">
                <div class="flex flex-col">
                    <h3 class="font-bold mb-3">Strony</h3>
                    <a class="mr-2" href="{base}/">{m.home_page()}</a>
                    <a class="mr-2" href="{base}/contact">{m.contact_page()}</a>
                    <a href="{base}/about">{m.about_page()}</a>
                </div>
                <div class="lg:ml-8">
                    <h3 class="font-bold mb-3">Masz pytania?</h3>
                    <a href="{base}/about">FAQ</a>
                </div>
            </div>
            <div class="flex flex-col md:flex-row justify-between flex-1">
                <div>
                    <h3 class="font-bold mb-3">Kontakt</h3>
                    <a class="py-1 pr-4 mb-2 rounded-md self-start text-black flex items-center" href="tel:+48452979179">
                        <MobileIcon color="#000000"/>
                        <span class="ml-2">+48 452 979 179</span>  
                    </a>
                    <a class="py-1 pr-4 mb-2  rounded-md self-start text-black flex items-center" href="https://t.me/+48452979179">
                        <TelegramIcon color="#000000"/>
                        <span class="ml-2">Telegram</span>  
                    </a>
                    <a class="py-1 rounded-md text-black flex items-center" href="mailto: v-skyi@gmail.com">
                        <EmailIcon/>
                        <span class="ml-2">v-skyi@gmail.com</span>
                    </a>
                </div>
                <hr class="mb-4">
                <div>
                    <div class="flex-1 rounded-lg mb-3 font-bold">Godziny pracy:</div>
                    <p>pn-pt: 9:00 - 17:00</p>
                </div>
                <hr class="mb-3">
                <div>
                    <h3 class="font-bold mb-3">O firmie:</h3>
                    <h4 class="mb-1">S-kyi Nieruchomość</h4>
                    <p class="mb-1">NIP: 23435455234</p>
                    <p class="mb-1">REGON: 30400350</p>
                </div>
            </div>
        </div>
    </div>
    <div class="flex justify-between items-center flex-col md:flex-row text-sm">
        <p class="mt-2 text-sm">All right reserved {year}</p>
        <div class="mt-2">
            <a href="/">Polityka prywatności</a>
        </div>
    </div>
</footer>