// this page should be used only as a splash page to decide where a user should be navigated to
// when logged in --> to /heists
// when not logged in --> to /login

import { Clock8 } from "lucide-react"

export default function Home() {
  return (
    <div className="center-content">
      <div className="page-content">
        <h1>
          P<Clock8 className="logo" strokeWidth={2.75} />cket Heist
        </h1>
        <div>Tiny missions. Big office mischief.</div>
        <p className="mt-6">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p className="mt-4">
          Curabitur pretium tincidunt lacus, nec gravida nisi blandit vel. Nulla
          facilisi, vivamus at augue eget arcu dictum varius duis at consectetur.
          Pellentesque habitant morbi tristique senectus et netus et malesuada fames.
          Aenean lacinia bibendum nulla sed consectetur, donec ullamcorper nulla non metus.
          Maecenas faucibus mollis interdum, integer posuere erat a ante venenatis dapibus.        </p>
        <p className="mt-4">
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
          cubilia curae. Praesent sapien massa, convallis a pellentesque nec,
          egestas non nisi. Nulla porttitor accumsan tincidunt.
        </p>
        <p className="mt-4">
          Quisque velit nisi, pretium ut lacinia in, elementum id enim. Proin eget
          tortor risus, sed porttitor lectus nibh.
        </p>
      </div>
    </div>
  )
}
