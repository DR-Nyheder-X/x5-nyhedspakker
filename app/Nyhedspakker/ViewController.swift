import UIKit
import WebKit

class ViewController: UIViewController, UIWebViewDelegate {
    
    @IBOutlet var webView: UIWebView!

    override func viewDidLoad() {
        super.viewDidLoad()
        
        let url = NSURL(string: "http://np.drdinstem.me")!
        let req = NSURLRequest(URL: url)
        webView.loadRequest(req)
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }

}

