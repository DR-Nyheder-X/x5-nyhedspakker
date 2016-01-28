import UIKit
import WebKit

class ViewController: UIViewController, UIWebViewDelegate {
    
    @IBOutlet var webView: UIWebView!
    @IBOutlet var activityIndicator: UIActivityIndicatorView!

    override func viewDidLoad() {
        super.viewDidLoad()
        
        let url = NSURL(string: "http://np.drdinstem.me")!
        let req = NSURLRequest(URL: url)
        webView.loadRequest(req)
        
        activityIndicator.startAnimating()
        activityIndicator.hidesWhenStopped = true
        
        NSNotificationCenter.defaultCenter().addObserverForName(UIApplicationDidBecomeActiveNotification, object: nil, queue: nil) { _ in 
            self.webView.reload()
        }
    }
    
    deinit {
        NSNotificationCenter.defaultCenter().removeObserver(self)
    }
    
    override func viewDidAppear(animated: Bool) {
        super.viewDidAppear(animated)
        webView.reload()
    }

    func webView(webView: UIWebView, didFailLoadWithError error: NSError?) {
        presentViewController(UIAlertController(title: "Fejl", message: "Kunne ikke loade indhold\n\(error?.description)", preferredStyle: UIAlertControllerStyle.Alert), animated: true, completion: nil)
    }
    
    func webViewDidStartLoad(webView: UIWebView) {
        activityIndicator.stopAnimating()
    }

}

