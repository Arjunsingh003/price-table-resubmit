import './App.css';
import { CheckLg } from 'react-bootstrap-icons';
import { Button } from 'react-bootstrap';
import { XLg } from 'react-bootstrap-icons';

function App() {
  return (

    <div class="container-fluid main">
        <div class="card box" >
            <div class="card-body ">
              <h5 class="card-title">FREE</h5>
              <h2>$0 /<small>month</small></h2>

              <p><span><CheckLg /></span> Single User</p>
              <p><span><CheckLg /></span> 5GB Storage</p>
              <p><span><CheckLg /></span> Unlimited Public Project</p>
              <p><span><CheckLg /></span> Community Access</p>
              <p><span><XLg /></span> Unlimited Private Project</p>
              <p><span><XLg /></span> Dedicated Phone Support</p>
              <p><span><XLg /></span> Free Subdomain</p>
              <p><span><XLg /></span> Monthly Status Report</p>
              <Button>BUTTON</Button>
            </div>
          </div>
          <div class="card box" >
            <div class="card-body">
              <h5 class="card-title">PRO</h5>
              <h2>$9 /<small>month</small></h2>

              <p><span><CheckLg /></span> 5 User</p>
              <p><span><CheckLg /></span> 50GB Storage</p>
              <p><span><CheckLg /></span> Unlimited Public Project</p>
              <p><span><CheckLg /></span> Community Access</p>
              <p><span><CheckLg /></span> Unlimited Private Project</p>
              <p><span><CheckLg /></span> Dedicated Phone Support</p>
              <p><span><CheckLg /></span> Free Subdomain</p>
              <p><span><XLg /></span> Monthly Status Report</p>
              <Button>BUTTON</Button>
            </div>
          </div>
          <div class="card box" >
            <div class="card-body">
              <h5 class="card-title">PLUS</h5>
              <h2>$49 /<small>month</small></h2>

              <p><span><CheckLg /></span> Unlimited User</p>
              <p><span><CheckLg /></span> 150GB Storage</p>
              <p><span><CheckLg /></span> Unlimited Public Project</p>
              <p><span><CheckLg /></span> Community Access</p>
              <p><span><CheckLg /></span> Unlimited Private Project</p>
              <p><span><CheckLg /></span> Dedicated Phone Support</p>
              <p><span><CheckLg /></span> Free Subdomain</p>
              <p><span><CheckLg /></span> Monthly Status Report</p>
              <Button>BUTTON</Button>
            </div>
          </div>
      </div>

  );
}

export default App;
