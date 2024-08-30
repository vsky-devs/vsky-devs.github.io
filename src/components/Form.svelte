<script lang="ts">
  import * as m from "$lib/paraglide/messages.js";
  import { quintOut } from 'svelte/easing';
  import { fly, slide } from 'svelte/transition';
  import Spinner from './Spinner.svelte';

  let hasError = false;
  let isSuccessVisible = false;
  let isFetching = false;
  let showAgreement = false;

  let form: HTMLFormElement;

  let name: String = "";
  let phone: String = "";
  let isAgreementChecked = false;

  $: disabled = name === "" || phone === "" || !isAgreementChecked;
  
  function submitForm(e: SubmitEvent): void {
     if(disabled) return;
      const form  = e.target as HTMLFormElement;
      isFetching = true;
      
      if(form) {
          const formData = new FormData(form);
          const ACTION_URL = form.action;
          let data: Record<string, FormDataEntryValue> = {};
  
          for (let [key, value] of formData.entries()) {
              data[key] = value;
          }
  
          fetch(ACTION_URL, { method: 'POST', body: formData,})
              .then((response) => {
                if(response.ok) {
                    isSuccessVisible = true;
                    setTimeout(() => isSuccessVisible = false, 4000)
                    form.reset();
                }
              })
              .catch(e => {
                hasError = true;
                setTimeout(() => hasError = false, 4000);
              })
              .finally(() => isFetching = false)
          
          console.log(data);
      } else {
          console.error("Form element not found.");
      }
  }
  </script>
  
<form 
    class="bg-white px-2 py-4 rounded-lg flex flex-col gap-4 md:flex-1"
    on:submit|preventDefault={submitForm}
    bind:this={form}
    action="https://script.google.com/macros/s/AKfycby6KYYUOGmKA93wOQTumjQNpU9vqV-V6XLD2uSt34Ivlgv4thtBbx4VXsurcGoMiTbpBQ/exec"
>
    <label class="flex flex-col">
    <span class="text-sm font-normal">* Name</span>
    <input 
    type="text"
    name="Name"
    bind:value={name} 
    class="border-grey-400 rounded-md p-2 focus:outline-none focus:border-green-600 peer-focus-visible:border-green-600 border-2 border-solid"
    placeholder="Name"
    required
    >
    </label>

    <label class="flex flex-col">
    <span class="text-sm font-normal">* Phone</span>
    <input 
    type="tel"
    name="Phone"
    bind:value={phone} 
    class="border-grey-400 rounded-md p-2 focus:outline-none focus:border-green-600 peer-focus-visible:border-green-600 border-2 border-solid"
    placeholder="+ (48) ..."
    required
    >
</label>
<div>
    <input type="checkbox"id="agreement" bind:checked={isAgreementChecked}/>
    <label for="agreement" class="text-sm">
        {showAgreement ? 
            "* Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis ratione, non dolores aliquid voluptates recusandae quasi ipsum ea, odio, facilis maiores exercitationem. Iure blanditiis dignissimos numquam id repellat natus laudantium."
            : "* Lorem ipsum dolor sit amet consectetur... "
        }
    </label>
    <button class="underline text-sm" on:click|preventDefault={() => showAgreement = !showAgreement}>{showAgreement ? "See less" : "See more"}</button>
</div>
<button 
    class="py-3 bg-black text-white rounded-lg disabled:bg-gray-500"
    disabled={disabled || isFetching}
>
    {#if isFetching}
        <Spinner/>
    {:else}
        {m.send_button()}
    {/if}
</button>
{#if isSuccessVisible} 
    <span
        transition:slide={{easing: quintOut, axis: 'y', duration: 500}}
        class="text-green-700 font-bold text-center">Message successfully sent!</span>
{:else}
    {#if hasError}
        <span 
            transition:slide={{easing: quintOut, axis: 'y', duration: 500}}
            class="text-red-700 font-bold text-center">All required fields shouldn't be empty!</span>
    {/if}
{/if}
</form>

