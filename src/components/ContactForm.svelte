<script lang="ts">
  import { enhance } from '$app/forms';


let name: String = "";
// let sureName: String;
// let email: String;
// let phone: String;
// let desription: String;

function submitForm(e: SubmitEvent): void {
    const form  = e.target as HTMLFormElement;
    
    if(form) {
        const formData = new FormData(form);
        const ACTION_URL = form.action;
        let data: Record<string, FormDataEntryValue> = {};

        for (let [key, value] of formData.entries()) {
            data[key] = value;
        }

        fetch(ACTION_URL, { method: 'POST', body: formData,})
            .then(() => {alert("Success!")})
            .catch(e => alert(e))
            .finally(() => {}
            // Clear FORM or Smth.
            )
        
        console.log(data);
    } else {
        console.error("Form element not found.");
    }
}
</script>
<!-- on:submit|preventDefault={submitForm} -->
<!-- method="POST"  -->

<form on:submit|preventDefault={submitForm} action="https://script.google.com/macros/s/AKfycby6KYYUOGmKA93wOQTumjQNpU9vqV-V6XLD2uSt34Ivlgv4thtBbx4VXsurcGoMiTbpBQ/exec">
    <input type="text" name="Name" bind:value={name} class="border border-red-400" placeholder="Name" required>
    <button>Submit</button>
</form>
{name}