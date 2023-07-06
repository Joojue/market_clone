const form = document.getElementById("write-form");

const handleSubmitForm = async (event) => {
  event.preventDefault();
  const accessToken = window.localStorage.getItem("token");
  const body = new FormData(form);
  body.append("insertAt", new Date().getTime());
  const res = await fetch("/items", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    method: "POST",
    body,
  });
  const data = await res.json();
  if (res.status === 200) {
    window.location.pathname = "/";
  } else if (res.status === 401) {
    alert("로그인이 필요합니다!");
    window.location.pathname = "/login.html";
    return;
  }
};

form.addEventListener("submit", handleSubmitForm);
