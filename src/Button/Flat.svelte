<button class="button {settedSize} {settedType}" class:disabled on:click={!disabled ? onClick: null}>
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
      background-color: #37bb2b;
      opacity: 0;
      transform: scale(40, 40);
    }
  }
  @keyframes rippleSec {
    0% {
      background-color: #b0b6b0;
      transform: scale(0, 0);
      opacity: 0.5;
    }
    20% {
      transform: scale(25, 25);
      opacity: 0.5;
    }
    100% {
      background-color: #b0b6b0;
      opacity: 0;
      transform: scale(40, 40);
    }
  }
  @keyframes rippleDng {
    0% {
      background-color: #ac0909;
      transform: scale(0, 0);
      opacity: 0.5;
    }
    20% {
      transform: scale(25, 25);
      opacity: 0.5;
    }
    100% {
      background-color: #ac0909;
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
  .PRIMARY:not(.disabled):focus:not(:active):after {
    animation: ripple 0.5s ease-out;
  }
  .SECONDARY:not(.disabled):focus:not(:active):after {
    animation: rippleSec 0.5s ease-out;
  }
  .DANGER:not(.disabled):focus:not(:active):after {
    animation: rippleDng 0.5s ease-out;
  }
  .NORMAL {
    height: 36px;
    line-height: 36px;
  }
  .LARGE {
    height: 50px;
    line-height: 50px;
  }
  .SMALL {
    height: 20px;
    line-height: 20px;
  }
  .disabled {
    cursor: default;
    background-color: rgba(29, 29, 29, 0.1);
  }
</style>

<script>
  import { createEventDispatcher } from 'svelte';
  import { getSize, getType } from './constants';
  export let text = '';
  export let disabled = false;
  export let size;
  export let type;
  const settedSize = getSize(size);
  const settedType = getType(type);
  const dispatch = createEventDispatcher();

  const onClick = (event) => dispatch('click', event);
</script>
