const form = document.querySelector("#login-form");

const handleSubmit = async (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const sha256Password = sha256(formData.get("password"));
  formData.set("password", sha256Password);

  const res = await fetch("/login", {
    method: "post",
    body: formData,
  });
  const data = await res.json();
  const accessToken = data.access_token;

  window.localStorage.setItem("token", accessToken);
  alert("로그인 되었습니다!");

  window.location.pathname = "/";

  // if (res.status === 200) {

  // } else if (res.status === 401) {
  //   alert("아이디 또는 비밀번호가 일치하지 않습니다!");
  // }
};

form.addEventListener("submit", handleSubmit);
