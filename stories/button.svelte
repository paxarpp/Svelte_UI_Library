<button class="button" on:click={onClick}>
    {text}
</button>

<style>
    @keyframes ripple {
      0% {
        background-color: #2bbbad;
        transform: scale(0, 0);
        opacity: 0.5;
      }
      20% {
        transform: scale(25, 25);
        opacity: 0.5;
      }
      100% {
        background-color: #2bbbad;
        opacity: 0;
        transform: scale(40, 40);
      }
    }
    .button {
      position: relative;
      overflow: hidden;
      border: none;
      border-radius: 2px;
      display: inline-block;
      height: 36px;
      line-height: 36px;
      padding: 0 16px;
      font-size: 14px;
      text-transform: uppercase;
      vertical-align: middle;
      color: #343434;
      background-color: transparent;
      text-align: center;
      letter-spacing: 0.5px;
      cursor: pointer;
      outline: none;
    }
    .button:after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 5px;
      height: 5px;
      background: rgba(0, 0, 0, 0.5);
      opacity: 0;
      border-radius: 100%;
      transform: scale(1, 1) translate(-50%);
      transform-origin: 50% 50%;
    }
    .button:focus:not(:active):after {
    animation: ripple 1s ease-out;
  }
</style>

<script>
  import { createEventDispatcher } from 'svelte';
  
  export let text = '';

  const dispatch = createEventDispatcher();

  const onClick = (event) => dispatch('click', event)
</script>
