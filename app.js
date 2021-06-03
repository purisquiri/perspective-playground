const vm = Vue.createApp({
  data() {
    return {
      perspective: 100,
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
    };
  },
  computed: {
    box() {
      return {
        transform: `
            perspective(${this.perspective}px)
            rotateX(${this.rotateX}deg)
            rotateY(${this.rotateY}deg)
            rotateZ(${this.rotateZ}deg)
            `,
      };
    },
  },
  methods: {
    reset() {
      alert("You are about to reset the values"),
        (this.perspective = 100),
        (this.rotateX = 0),
        (this.rotateY = 0),
        (this.rotateZ = 0);
    },
    copy() {
      const el = document.createElement("textarea");
      el.setAttribute("readonly", "true");
      el.style.position = "absolute";
      el.style.left = "-9999px";
      el.value = `transform: ${this.box.transform}`;

      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      alert("congratulation your copy the values, it on your clipboard now");
    },
  },
}).mount("#app");
