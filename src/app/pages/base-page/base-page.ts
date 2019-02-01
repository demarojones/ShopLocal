import { Injector } from '@angular/core';
import { NavController, LoadingController, ToastController,
  AlertController, MenuController } from '@ionic/angular';

export abstract class BasePage {

  public isErrorViewVisible: boolean;
  public isEmptyViewVisible: boolean;
  public isContentViewVisible: boolean;
  public isLoadingViewVisible: boolean;

  protected refresher: any;
  protected infiniteScroll: any;
  // protected navParams: NavParams;

  private loader: any;
  private navCtrl: NavController;
  private toastCtrl: ToastController;
  private loadingCtrl: LoadingController;
  private alertCtrl: AlertController;

  constructor(injector: Injector) {
    this.loadingCtrl = injector.get(LoadingController);
    this.toastCtrl = injector.get(ToastController);
    this.navCtrl = injector.get(NavController);
    this.alertCtrl = injector.get(AlertController);
    // this.navParams = injector.get(NavParams);

   const menu = injector.get(MenuController);
    // menu.swipeEnable(this.enableMenuSwipe());
  }

  abstract enableMenuSwipe(): boolean;

  async showLoadingView() {
    this.isErrorViewVisible = false;
    this.isEmptyViewVisible = false;
    this.isContentViewVisible = false;
    this.isLoadingViewVisible = true;
    const LOADING_TXT = 'LOADING...';
     this.loader = await this.loadingCtrl.create({
      message: `<p class="bold">${LOADING_TXT}</p>`
    });
    await this.loader.present();
  }

   async dismissLoadingView() {
    if (this.loader) {
      await this.loader.dismiss().catch((e) => console.log('ERROR CATCH: LoadingController dismiss', e));
    }
  }

  showContentView() {

    this.isErrorViewVisible = false;
    this.isEmptyViewVisible = false;
    this.isLoadingViewVisible = false;
    this.isContentViewVisible = true;

    this.dismissLoadingView();
  }

  showEmptyView() {

    this.isErrorViewVisible = false;
    this.isLoadingViewVisible = false;
    this.isContentViewVisible = false;
    this.isEmptyViewVisible = true;

    this.dismissLoadingView();
  }

  showErrorView() {

    this.isLoadingViewVisible = false;
    this.isContentViewVisible = false;
    this.isEmptyViewVisible = false;
    this.isErrorViewVisible = true;

    this.dismissLoadingView();
  }

   onRefreshComplete(data = null) {

    if (this.refresher) {
      this.refresher.complete();
    }

    if (this.infiniteScroll) {
      this.infiniteScroll.complete();

      if (data && data.length === 0) {
        this.infiniteScroll.enable(false);
      } else {
        this.infiniteScroll.enable(true);
      }
    }
  }

  async showToast(message: string) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 3000
    });

    await toast.present();
  }

  async showConfirm(message: string) {
    const values = ['OK', 'CANCEL'];
        const confirm = await this.alertCtrl.create({
          header: '',
          message: message,
          buttons: [{
            text: values[1],
            role: 'cancel',
          }, {
            text: values[0]
          }]
        });
        await confirm.present();
  }

  navigateTo(page: any, params: any = {}) {
    this.navCtrl.navigateForward(page, params);
  }

  goBack() {
    this.navCtrl.back();
  }

  navigateBack(url: string) {
    this.navCtrl.navigateBack(url);
  }
}
