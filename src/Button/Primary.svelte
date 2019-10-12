<button class="button {settedSize} {settedType}" class:disabled on:click={!disabled ? onClick: null}>
    {text}
</button>

<style>
  @keyframes ripple {
    0% {
      transform: scale(0, 0);
      opacity: 0.5;
    }
    20% {
      transform: scale(25, 25);
      opacity: 0.5;
    }
    100% {
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
    text-align: center;
    letter-spacing: 0.5px;
    cursor: pointer;
    outline: none;
    box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.14), 0 1px 7px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -1px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease-out;
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
  .PRIMARY:not(.disabled) {
    background-color: #2bbbad;
  }
  .SECONDARY:not(.disabled) {
    background-color: #b0b6b0;
  }
  .DANGER:not(.disabled) {
    background-color: #ac0909;
  }
  .PRIMARY:not(.disabled):hover,
  .SECONDARY:not(.disabled):hover,
  .DANGER:not(.disabled):hover {
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  }
  :not(.disabled):focus:not(:active):after {
    animation: ripple 0.5s ease-out;
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
    box-shadow: none;
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
